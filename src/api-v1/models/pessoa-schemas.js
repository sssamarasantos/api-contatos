export const pessoaSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "nome": {
            "type": "string",
            "description": "Nome da pessoa"
        },
        "email": {
            "type": "string",
            "description": "Endereço eletrônico da pessoa"
        },
        "telefone": {
            "type": "string",
            "description": "Número de telefone da pessoa"
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string",
                "description": "Tags"
            }
        }
    },
    "required": [
        "nome",
        "email"
    ]
};