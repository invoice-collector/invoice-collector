
import { SketchCollector } from '../../sketchCollector';

export class DentalMonitoringAuCollector extends SketchCollector {

    static CONFIG = {
        id: "dental_monitoring_au",
        name: "Dental Monitoring AU",
        description: "i18n.collectors.dental_monitoring_au.description",
        version: "0",
        website: "https://dental-monitoring.com/doctor/login?loc=%2Fdoctor%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/424297.jpg",
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
        entryUrl: "https://dental-monitoring.com/doctor/login?loc=%2Fdoctor%2F",
    }

    constructor() {
        super(DentalMonitoringAuCollector.CONFIG);
    }
}
