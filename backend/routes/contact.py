from fastapi import APIRouter, HTTPException, Depends
from models.contact import ContactMessageCreate, ContactMessage
from datetime import datetime
from typing import List

router = APIRouter(prefix="/api", tags=["contact"])

# Database will be injected as dependency
def get_db():
    from server import db
    return db

@router.post("/contact")
async def submit_contact_message(message: ContactMessageCreate, db = Depends(get_db)):
    """
    Submit a contact form message
    """
    try:
        # Create message document
        message_dict = {
            "name": message.name,
            "email": message.email,
            "message": message.message,
            "created_at": datetime.utcnow(),
            "read": False
        }
        
        # Insert into database
        result = await db.contact_messages.insert_one(message_dict)
        
        return {
            "success": True,
            "message": "Message sent successfully!",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")

@router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages(db = Depends(get_db)):
    """
    Get all contact messages (admin endpoint)
    """
    try:
        messages = await db.contact_messages.find().sort("created_at", -1).to_list(100)
        return [
            ContactMessage(
                id=str(msg["_id"]),
                name=msg["name"],
                email=msg["email"],
                message=msg["message"],
                created_at=msg["created_at"],
                read=msg.get("read", False)
            )
            for msg in messages
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve messages: {str(e)}")