
import { SketchCollector } from '../../sketchCollector';

export class UnitedHosterCollector extends SketchCollector {

    static CONFIG = {
        id: "united_hoster",
        name: "United Hoster",
        description: "i18n.collectors.united_hoster.description",
        version: "0",
        website: "https://portal.united-hoster.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2287.jpg",
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
        entryUrl: "https://portal.united-hoster.de/login",
    }

    constructor() {
        super(UnitedHosterCollector.CONFIG);
    }
}
