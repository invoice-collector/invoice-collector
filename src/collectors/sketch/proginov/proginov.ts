
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProginovCollector extends SketchCollector {

    static CONFIG = {
        id: "proginov",
        name: "Proginov",
        description: "i18n.collectors.proginov.description",
        version: "0",
        website: "https://www.proginov.fr/ProginovDemat/liste-ged/xdoc-xclasschapfactures.html?keycnx=183-C-329613&variante=Vfactures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034323.jpg",
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
        loginUrl: "https://www.proginov.fr/ProginovDemat/liste-ged/xdoc-xclasschapfactures.html?keycnx=183-C-329613&variante=Vfactures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProginovCollector.CONFIG);
    }
}
