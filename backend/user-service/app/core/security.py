# services/user_service/app/core/security.py
from passlib.context import CryptContext

# Configura o contexto de hashing de senha, usando bcrypt como o esquema padrão
# e informando que também suporta (mas não usa para novos hashes) esquemas mais antigos, se necessário.
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifica se a senha em texto plano corresponde à senha hasheada."""
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    """Gera o hash de uma senha em texto plano."""
    return pwd_context.hash(password)