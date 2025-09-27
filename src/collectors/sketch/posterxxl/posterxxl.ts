
import { SketchCollector } from '../../sketchCollector';

export class PosterxxlCollector extends SketchCollector {

    static CONFIG = {
        id: "posterxxl",
        name: "posterXXL",
        description: "i18n.collectors.posterxxl.description",
        version: "0",
        website: "https://www.posterxxl.de/kundenkonto/sammelrechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7737.jpg",
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
        entryUrl: "https://www.posterxxl.de/kundenkonto/sammelrechnungen",
    }

    constructor() {
        super(PosterxxlCollector.CONFIG);
    }
}
