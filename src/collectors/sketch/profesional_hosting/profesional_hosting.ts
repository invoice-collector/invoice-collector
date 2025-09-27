
import { SketchCollector } from '../../sketchCollector';

export class ProfesionalHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "profesional_hosting",
        name: "Profesional Hosting",
        description: "i18n.collectors.profesional_hosting.description",
        version: "0",
        website: "https://clientes.profesionalhosting.com/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8739.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://clientes.profesionalhosting.com/clientarea.php",
    }

    constructor() {
        super(ProfesionalHostingCollector.CONFIG);
    }
}
