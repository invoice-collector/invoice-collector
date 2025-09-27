
import { SketchCollector } from '../../sketchCollector';

export class MeinhoergeraetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "meinhoergeraet_de",
        name: "meinhoergeraet.de",
        description: "i18n.collectors.meinhoergeraet_de.description",
        version: "0",
        website: "https://www.meinhoergeraet.de/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77609.jpg",
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
        entryUrl: "https://www.meinhoergeraet.de/de/login",
    }

    constructor() {
        super(MeinhoergeraetDeCollector.CONFIG);
    }
}
