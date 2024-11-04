export type TipoMoto = {
  id: number
  quilometragem: number
  ano: number
  placa: string
  modelo: string
  tipo: string
  marca: string
  historico: string
  descricao: string
}

export type TipoCarro = {
  id: number
  quilometragem: number
  ano: number
  placa: string
  modelo: string
  tipo: string
  marca: string
  historico: string
  descricao: string
}

export type TipoCaminhao = {
  id: number
  quilometragem: number
  ano: number
  placa: string
  modelo: string
  tipo: string
  marca: string
  historico: string
  descricao: string
}

export type Usuario = {
  ID_USUARIO: number
  NR_IDADE: number
  NR_CNH: number
  DT_NASCIMENTO: string
  NM_USUARIO: string
  NR_CPF: string
}

export type loginusuario = {
  ID_LOGIN: number,
  DS_SENHA: string, 
  ID_USUARIO: number,
  DS_USUARIO: string
}

export type enderecousuario = {
  ID_ENDERECO: number,
  NR_CEP: string,
  NM_ESTADO: string,
  NM_CIDADE: string,
  NM_BAIRRO: string,
  NM_LOGRADOURO: string,
  TP_ENDERECO: string,
  DS_COMPLEMENTO: string, 
  DS_PONTO_REFERENCIA: string
}

export type usuario_endereco = {
  ID_USUARIO: number,
  ID_ENDERECO: number
}