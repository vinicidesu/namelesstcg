from fastapi import APIRouter

router = APIRouter(prefix="/users", tags=["users"])    

@router.post("/register")
def user_register():
    router