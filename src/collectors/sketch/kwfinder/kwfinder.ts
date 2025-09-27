
import { SketchCollector } from '../../sketchCollector';

export class KwfinderCollector extends SketchCollector {

    static CONFIG = {
        id: "kwfinder",
        name: "KWFinder",
        description: "i18n.collectors.kwfinder.description",
        version: "0",
        website: "https://mangools.com/users/sign_in?redirect=https://app.kwfinder.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16855.jpg",
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
        entryUrl: "https://mangools.com/users/sign_in?redirect=https://app.kwfinder.com/",
    }

    constructor() {
        super(KwfinderCollector.CONFIG);
    }
}
