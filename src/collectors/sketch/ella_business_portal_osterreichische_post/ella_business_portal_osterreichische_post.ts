
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EllaBusinessPortalOsterreichischePostCollector extends SketchCollector {

    static CONFIG = {
        id: "ella_business_portal_osterreichische_post",
        name: "Ella Business Portal Osterreichische Post",
        description: "i18n.collectors.ella_business_portal_osterreichische_post.description",
        version: "0",
        website: "https://ella.post.at/en/my-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862811.jpg",
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
        entryUrl: "https://ella.post.at/en/my-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EllaBusinessPortalOsterreichischePostCollector.CONFIG);
    }
}
