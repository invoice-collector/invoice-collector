
import { SketchCollector } from '../../sketchCollector';

export class DomainbestellsystemCollector extends SketchCollector {

    static CONFIG = {
        id: "domainbestellsystem",
        name: "Domainbestellsystem",
        description: "i18n.collectors.domainbestellsystem.description",
        version: "0",
        website: "https://www.domain-bestellsystem.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4062110.jpg",
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
        entryUrl: "https://www.domain-bestellsystem.de/login.php",
    }

    constructor() {
        super(DomainbestellsystemCollector.CONFIG);
    }
}
