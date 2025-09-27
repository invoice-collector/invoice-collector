
import { SketchCollector } from '../../sketchCollector';

export class DomainboostingComCollector extends SketchCollector {

    static CONFIG = {
        id: "domainboosting_com",
        name: "domainboosting.com",
        description: "i18n.collectors.domainboosting_com.description",
        version: "0",
        website: "https://www.domainboosting.com/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/425.jpg",
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
        entryUrl: "https://www.domainboosting.com/de/login",
    }

    constructor() {
        super(DomainboostingComCollector.CONFIG);
    }
}
