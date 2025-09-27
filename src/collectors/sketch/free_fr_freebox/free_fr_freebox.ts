
import { SketchCollector } from '../../sketchCollector';

export class FreeFrFreeboxCollector extends SketchCollector {

    static CONFIG = {
        id: "free_fr_freebox",
        name: "free.fr - Freebox",
        description: "i18n.collectors.free_fr_freebox.description",
        version: "0",
        website: "https://subscribe.free.fr/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37598.jpg",
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
        entryUrl: "https://subscribe.free.fr/login/",
    }

    constructor() {
        super(FreeFrFreeboxCollector.CONFIG);
    }
}
