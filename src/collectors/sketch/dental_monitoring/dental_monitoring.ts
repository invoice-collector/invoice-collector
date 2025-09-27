
import { SketchCollector } from '../../sketchCollector';

export class DentalMonitoringCollector extends SketchCollector {

    static CONFIG = {
        id: "dental_monitoring",
        name: "Dental Monitoring",
        description: "i18n.collectors.dental_monitoring.description",
        version: "0",
        website: "https://dental-monitoring.com/doctor/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2553001.jpg",
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
        entryUrl: "https://dental-monitoring.com/doctor/login",
    }

    constructor() {
        super(DentalMonitoringCollector.CONFIG);
    }
}
