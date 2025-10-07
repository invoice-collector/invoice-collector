
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FontByHoeflerAndCoCollector extends SketchCollector {

    static CONFIG = {
        id: "font_by_hoefler_and_co",
        name: "Font by Hoefler & Co",
        description: "i18n.collectors.font_by_hoefler_and_co.description",
        version: "0",
        website: "https://www.typography.com/account/your-account.php#subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59324.jpg",
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
        entryUrl: "https://www.typography.com/account/your-account.php#subscriptions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FontByHoeflerAndCoCollector.CONFIG);
    }
}
