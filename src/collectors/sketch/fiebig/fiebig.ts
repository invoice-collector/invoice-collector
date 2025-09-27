
import { SketchCollector } from '../../sketchCollector';

export class FiebigCollector extends SketchCollector {

    static CONFIG = {
        id: "fiebig",
        name: "Fiebig",
        description: "i18n.collectors.fiebig.description",
        version: "0",
        website: "https://kundenportal.fiebig.de/ig-ApothekenWebx/index.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2693790.jpg",
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
        entryUrl: "https://kundenportal.fiebig.de/ig-ApothekenWebx/index.jsp",
    }

    constructor() {
        super(FiebigCollector.CONFIG);
    }
}
