
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IdealoPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "idealo_partner",
        name: "Idealo Partner",
        description: "i18n.collectors.idealo_partner.description",
        version: "0",
        website: "https://partner.net.idealo-partner.com/app/index.html#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/513819.jpg",
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
        entryUrl: "https://partner.net.idealo-partner.com/app/index.html#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IdealoPartnerCollector.CONFIG);
    }
}
