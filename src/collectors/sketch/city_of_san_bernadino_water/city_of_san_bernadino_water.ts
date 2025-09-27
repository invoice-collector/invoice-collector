
import { SketchCollector } from '../../sketchCollector';

export class CityOfSanBernadinoWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_san_bernadino_water",
        name: "City of San Bernadino Water",
        description: "i18n.collectors.city_of_san_bernadino_water.description",
        version: "0",
        website: "https://www.onlinebiller.com/sbmwd/statements.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724310.jpg",
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
        entryUrl: "https://www.onlinebiller.com/sbmwd/statements.html",
    }

    constructor() {
        super(CityOfSanBernadinoWaterCollector.CONFIG);
    }
}
