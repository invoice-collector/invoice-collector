
import { SketchCollector } from '../../sketchCollector';

export class TvGesundheitCollector extends SketchCollector {

    static CONFIG = {
        id: "tv_gesundheit",
        name: "tv-gesundheit",
        description: "i18n.collectors.tv_gesundheit.description",
        version: "0",
        website: "https://www.tv-gesundheit.com/Account/Rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694500.jpg",
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
        entryUrl: "https://www.tv-gesundheit.com/Account/Rechnungen",
    }

    constructor() {
        super(TvGesundheitCollector.CONFIG);
    }
}
