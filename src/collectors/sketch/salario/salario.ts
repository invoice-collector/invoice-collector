
import { SketchCollector } from '../../sketchCollector';

export class SalarioCollector extends SketchCollector {

    static CONFIG = {
        id: "salario",
        name: "Salario",
        description: "i18n.collectors.salario.description",
        version: "0",
        website: "https://salario.de/user/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172787.jpg",
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
        entryUrl: "https://salario.de/user/index.php",
    }

    constructor() {
        super(SalarioCollector.CONFIG);
    }
}
