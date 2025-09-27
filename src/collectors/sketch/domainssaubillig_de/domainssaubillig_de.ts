
import { SketchCollector } from '../../sketchCollector';

export class DomainssaubilligDeCollector extends SketchCollector {

    static CONFIG = {
        id: "domainssaubillig_de",
        name: "domainssaubillig.de",
        description: "i18n.collectors.domainssaubillig_de.description",
        version: "0",
        website: "https://mein.domainssaubillig.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46743.jpg",
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
        entryUrl: "https://mein.domainssaubillig.de/",
    }

    constructor() {
        super(DomainssaubilligDeCollector.CONFIG);
    }
}
