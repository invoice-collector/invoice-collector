
import { SketchCollector } from '../../sketchCollector';

export class MrsSportyCollector extends SketchCollector {

    static CONFIG = {
        id: "mrs_sporty",
        name: "Mrs. Sporty",
        description: "i18n.collectors.mrs_sporty.description",
        version: "0",
        website: "https://portal.mrssporty.com/ControlPanel/Bwa",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2742736.jpg",
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
        entryUrl: "https://portal.mrssporty.com/ControlPanel/Bwa",
    }

    constructor() {
        super(MrsSportyCollector.CONFIG);
    }
}
