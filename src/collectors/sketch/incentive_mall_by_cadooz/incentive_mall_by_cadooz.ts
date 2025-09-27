
import { SketchCollector } from '../../sketchCollector';

export class IncentiveMallByCadoozCollector extends SketchCollector {

    static CONFIG = {
        id: "incentive_mall_by_cadooz",
        name: "Incentive Mall by Cadooz",
        description: "i18n.collectors.incentive_mall_by_cadooz.description",
        version: "0",
        website: "https://incentivemall.cadooz.com/mall/history.do;jsessionid=_KDe_8YYZnnjmLC6_FhkHHTrk_jdEiL0vhIROFmu.bus01?action=LOAD",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/875948.jpg",
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
        entryUrl: "https://incentivemall.cadooz.com/mall/history.do;jsessionid=_KDe_8YYZnnjmLC6_FhkHHTrk_jdEiL0vhIROFmu.bus01?action=LOAD",
    }

    constructor() {
        super(IncentiveMallByCadoozCollector.CONFIG);
    }
}
