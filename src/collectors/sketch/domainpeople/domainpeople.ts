
import { SketchCollector } from '../../sketchCollector';

export class DomainpeopleCollector extends SketchCollector {

    static CONFIG = {
        id: "domainpeople",
        name: "DomainPeople",
        description: "i18n.collectors.domainpeople.description",
        version: "0",
        website: "https://sitecontrol.domainpeople.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413130.jpg",
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
        entryUrl: "https://sitecontrol.domainpeople.com/",
    }

    constructor() {
        super(DomainpeopleCollector.CONFIG);
    }
}
