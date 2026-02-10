from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=2000)

class ContactMessage(BaseModel):
    id: str
    name: str
    email: str
    message: str
    created_at: datetime
    read: bool = False

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }