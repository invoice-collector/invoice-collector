
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Energieausweis48DeCollector extends SketchCollector {

    static CONFIG = {
        id: "energieausweis48_de",
        name: "Energieausweis48.de",
        description: "i18n.collectors.energieausweis48_de.description",
        version: "0",
        website: "https://portal.energieausweis48.de/memberarea/invoices?_gl=1*1jboa3c*_up*MQ..*_ga*NDYxODAxOTc5LjE3Mjc0Mjg3NDg.*_ga_8T37RQ4ZCB*MTcyNzQyODc0Ny4xLjAuMTcyNzQyODc0Ny4wLjAuMTk5OTMyMjM5OQ..",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3313290.jpg",
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
        entryUrl: "https://portal.energieausweis48.de/memberarea/invoices?_gl=1*1jboa3c*_up*MQ..*_ga*NDYxODAxOTc5LjE3Mjc0Mjg3NDg.*_ga_8T37RQ4ZCB*MTcyNzQyODc0Ny4xLjAuMTcyNzQyODc0Ny4wLjAuMTk5OTMyMjM5OQ..",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Energieausweis48DeCollector.CONFIG);
    }
}
