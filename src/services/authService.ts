export type LoginUsuario = {
  ID_LOGIN: number
  DS_SENHA: string
  ID_USUARIO: number
  DS_USUARIO: string
}

export async function getUserIdByCredentials(
  DS_USUARIO: string,
  DS_SENHA: string
): Promise<number | null> {
  try {
    const response = await fetch("http://localhost:8080/login")
    const data: LoginUsuario[] = await response.json()

    const usuario = data.find(
      (user) => user.DS_USUARIO === DS_USUARIO && user.DS_SENHA === DS_SENHA
    )
    return usuario ? usuario.ID_USUARIO : null
  } catch (error) {
    console.error("Erro ao buscar o usuário:", error)
    return null
  }
}
