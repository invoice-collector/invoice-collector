
import { SketchCollector } from '../../sketchCollector';

export class PhotowebFrCollector extends SketchCollector {

    static CONFIG = {
        id: "photoweb_fr",
        name: "Photoweb.fr",
        description: "i18n.collectors.photoweb_fr.description",
        version: "0",
        website: "https://www.photoweb.fr/moncompte/Account/LogOn?ReturnUrl=%2fmoncompte%2f#registration-modal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27322.jpg",
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
        entryUrl: "https://www.photoweb.fr/moncompte/Account/LogOn?ReturnUrl=%2fmoncompte%2f#registration-modal",
    }

    constructor() {
        super(PhotowebFrCollector.CONFIG);
    }
}
