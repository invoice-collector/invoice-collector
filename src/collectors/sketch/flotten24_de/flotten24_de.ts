
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Flotten24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "flotten24_de",
        name: "Flotten24.de",
        description: "i18n.collectors.flotten24_de.description",
        version: "0",
        website: "https://www.flotten24.de/cgi-bin/ashop.pl?cart_id=xL6LUMemK3ELRK96.982.499735568&dsco=82&Cookie=&custom=&meinb=yes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445716.jpg",
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
        loginUrl: "https://www.flotten24.de/cgi-bin/ashop.pl?cart_id=xL6LUMemK3ELRK96.982.499735568&dsco=82&Cookie=&custom=&meinb=yes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Flotten24DeCollector.CONFIG);
    }
}
