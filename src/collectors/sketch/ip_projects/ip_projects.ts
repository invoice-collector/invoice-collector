
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IpProjectsCollector extends SketchCollector {

    static CONFIG = {
        id: "ip_projects",
        name: "IP-Projects",
        description: "i18n.collectors.ip_projects.description",
        version: "0",
        website: "https://portal.ip-projects.de/#profile/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7409.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://portal.ip-projects.de/#profile/Invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IpProjectsCollector.CONFIG);
    }
}
