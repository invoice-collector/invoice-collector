
import { SketchCollector } from '../../sketchCollector';

export class FragabCollector extends SketchCollector {

    static CONFIG = {
        id: "fragab",
        name: "FragAB",
        description: "i18n.collectors.fragab.description",
        version: "0",
        website: "https://fragab.de/download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2987727.jpg",
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
        entryUrl: "https://fragab.de/download",
    }

    constructor() {
        super(FragabCollector.CONFIG);
    }
}
