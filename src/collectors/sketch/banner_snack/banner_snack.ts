
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BannerSnackCollector extends SketchCollector {

    static CONFIG = {
        id: "banner_snack",
        name: "Banner Snack",
        description: "i18n.collectors.banner_snack.description",
        version: "0",
        website: "https://app.bannersnack.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71329.jpg",
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
        entryUrl: "https://app.bannersnack.com/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BannerSnackCollector.CONFIG);
    }
}
