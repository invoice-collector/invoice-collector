
import { SketchCollector } from '../../sketchCollector';

export class OpenweathermapCollector extends SketchCollector {

    static CONFIG = {
        id: "openweathermap",
        name: "OpenWeatherMap",
        description: "i18n.collectors.openweathermap.description",
        version: "0",
        website: "https://home.openweathermap.org/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69032.jpg",
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
        entryUrl: "https://home.openweathermap.org/payments",
    }

    constructor() {
        super(OpenweathermapCollector.CONFIG);
    }
}
