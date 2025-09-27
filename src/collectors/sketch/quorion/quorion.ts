
import { SketchCollector } from '../../sketchCollector';

export class QuorionCollector extends SketchCollector {

    static CONFIG = {
        id: "quorion",
        name: "Quorion",
        description: "i18n.collectors.quorion.description",
        version: "0",
        website: "https://delta-a.de/prod/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/386530.jpg",
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
        entryUrl: "https://delta-a.de/prod/reports",
    }

    constructor() {
        super(QuorionCollector.CONFIG);
    }
}
