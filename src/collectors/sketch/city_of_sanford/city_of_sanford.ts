
import { SketchCollector } from '../../sketchCollector';

export class CityOfSanfordCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_sanford",
        name: "City of Sanford",
        description: "i18n.collectors.city_of_sanford.description",
        version: "0",
        website: "https://sanf-egov.aspgov.com/Click2GovCX/billingdetail.html?OWASP_CSRFTOKEN=OFY8-V7ON-VWPN-YQ6O-IFBE-SEQA-9CJU-AH1R&billingHistoryView=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798730.jpg",
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
        entryUrl: "https://sanf-egov.aspgov.com/Click2GovCX/billingdetail.html?OWASP_CSRFTOKEN=OFY8-V7ON-VWPN-YQ6O-IFBE-SEQA-9CJU-AH1R&billingHistoryView=true",
    }

    constructor() {
        super(CityOfSanfordCollector.CONFIG);
    }
}
