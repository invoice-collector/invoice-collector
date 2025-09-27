
import { SketchCollector } from '../../sketchCollector';

export class AlarmDetectionSystemsCollector extends SketchCollector {

    static CONFIG = {
        id: "alarm_detection_systems",
        name: "Alarm Detection Systems",
        description: "i18n.collectors.alarm_detection_systems.description",
        version: "0",
        website: "https://www2.adsalarm.com/MyADS/LoginPage.aspx?_gl=1*jbfak8*_ga*MTQ2MDIyODc3Mi4xNjk0NTM2NzU3*_ga_JNDSRR9E48*MTY5NDUzNjc1Ny4xLjAuMTY5NDUzNjc1Ny42MC4wLjA.",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382649.jpg",
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
        entryUrl: "https://www2.adsalarm.com/MyADS/LoginPage.aspx?_gl=1*jbfak8*_ga*MTQ2MDIyODc3Mi4xNjk0NTM2NzU3*_ga_JNDSRR9E48*MTY5NDUzNjc1Ny4xLjAuMTY5NDUzNjc1Ny42MC4wLjA.",
    }

    constructor() {
        super(AlarmDetectionSystemsCollector.CONFIG);
    }
}
