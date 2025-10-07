
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DomainnameshopNoCollector extends SketchCollector {

    static CONFIG = {
        id: "domainnameshop_no",
        name: "Domainnameshop.no",
        description: "i18n.collectors.domainnameshop_no.description",
        version: "0",
        website: "https://domainname.shop/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8894.jpg",
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
        entryUrl: "https://domainname.shop/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DomainnameshopNoCollector.CONFIG);
    }
}
