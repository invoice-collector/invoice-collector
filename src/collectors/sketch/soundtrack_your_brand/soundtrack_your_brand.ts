
import { SketchCollector } from '../../sketchCollector';

export class SoundtrackYourBrandCollector extends SketchCollector {

    static CONFIG = {
        id: "soundtrack_your_brand",
        name: "Soundtrack Your Brand",
        description: "i18n.collectors.soundtrack_your_brand.description",
        version: "0",
        website: "https://business.soundtrackyourbrand.com/accounts/QWNjb3VudCwsMWxpd3g5bzJ4MzQv/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/708709.jpg",
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
        entryUrl: "https://business.soundtrackyourbrand.com/accounts/QWNjb3VudCwsMWxpd3g5bzJ4MzQv/settings/billing",
    }

    constructor() {
        super(SoundtrackYourBrandCollector.CONFIG);
    }
}
