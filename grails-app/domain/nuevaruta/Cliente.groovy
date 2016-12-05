package nuevaruta

class Cliente {
    String rut, nombres, paterno, materno, telefono, correo, estado, clave, facebookID
    Date fechaCreacion = new Date(), fechaNacimiento
    static belongsTo = []
    static hasMany = [reserva:Reserva, pago:Pago,contrato:Contrato]
    static constraints = {
        estado nullable: true, blank: true
        rut nullable: true, blank: true
        paterno nullable: true, blank:true
        clave nullable: true, blank: true
        materno nullable: true, blank: true
        telefono nullable: true, blank: true
        fechaNacimiento nullable: true, blank: true
        facebookID nullable: true, blanck:true
    }
}
