from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional
from datetime import datetime

class UserBaseSchema(BaseModel):
    username: str = Field(..., min_length = 3, max_length = 50, description = "Nome de usuário único")
    email: EmailStr = Field(..., description = "Email válido do usuário")
    full_name: Optional[str] = Field(None, max_length = 100, description = "Nome completo do usuário")

class UserCreateSchema(UserBaseSchema):
    password: str = Field(..., min_length = 8, description = "Senha do usuário (mínimo 8 caracteres)")

class UserResponseSchema(UserBaseSchema):
    id: int = Field(..., description = "ID único do usuário")
    is_active: bool = Field(default = True)
    created_at: datetime

    model_config = ConfigDict(from_attributes = True)