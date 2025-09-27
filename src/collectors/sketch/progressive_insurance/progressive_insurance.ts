
import { SketchCollector } from '../../sketchCollector';

export class ProgressiveInsuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "progressive_insurance",
        name: "Progressive Insurance",
        description: "i18n.collectors.progressive_insurance.description",
        version: "0",
        website: "https://servicing5.progressive.com/xps.web/s4/scripts/DisplayPage.aspx?Page=Documents&TransactionName=ProofOfInsurance&Zone=LocalNav_Zone&Filter=Forms&Location=BunkerWest&Userid=f51eb364-f97c-41c3-be65-8bae5d6c463c&OfferingId=CAAAAAAG201804&transNum=&Act=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161952.jpg",
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
        entryUrl: "https://servicing5.progressive.com/xps.web/s4/scripts/DisplayPage.aspx?Page=Documents&TransactionName=ProofOfInsurance&Zone=LocalNav_Zone&Filter=Forms&Location=BunkerWest&Userid=f51eb364-f97c-41c3-be65-8bae5d6c463c&OfferingId=CAAAAAAG201804&transNum=&Act=",
    }

    constructor() {
        super(ProgressiveInsuranceCollector.CONFIG);
    }
}
