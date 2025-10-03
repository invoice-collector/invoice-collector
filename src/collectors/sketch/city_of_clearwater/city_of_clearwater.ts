
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfClearwaterCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_clearwater",
        name: "City of Clearwater",
        description: "i18n.collectors.city_of_clearwater.description",
        version: "0",
        website: "https://secure8.i-doxs.net/CityOfClearwater/Signin.aspx?ReturnUrl=%2fCityOfClearwater%2fSecure%2fHome.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035413.jpg",
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
        entryUrl: "https://secure8.i-doxs.net/CityOfClearwater/Signin.aspx?ReturnUrl=%2fCityOfClearwater%2fSecure%2fHome.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfClearwaterCollector.CONFIG);
    }
}
