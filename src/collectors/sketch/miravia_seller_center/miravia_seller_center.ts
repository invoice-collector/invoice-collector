
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MiraviaSellerCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "miravia_seller_center",
        name: "Miravia Seller Center",
        description: "i18n.collectors.miravia_seller_center.description",
        version: "0",
        website: "https://sellercenter.miravia.es/apps/finance/accountStatement/index?spm=a2a4n.17752401.navi_left_sidebar.droot_normal_finance_mystatement.50c24edfKOtUBw&tab=4&orderId=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973282.jpg",
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
        entryUrl: "https://sellercenter.miravia.es/apps/finance/accountStatement/index?spm=a2a4n.17752401.navi_left_sidebar.droot_normal_finance_mystatement.50c24edfKOtUBw&tab=4&orderId=",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiraviaSellerCenterCollector.CONFIG);
    }
}
