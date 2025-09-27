
import { SketchCollector } from '../../sketchCollector';

export class CampaignMonitorCollector extends SketchCollector {

    static CONFIG = {
        id: "campaign_monitor",
        name: "Campaign Monitor",
        description: "i18n.collectors.campaign_monitor.description",
        version: "0",
        website: "https://login.createsend.com/l?_ga=2.41260645.657612371.1523338420-1375527042.1523338420",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409.jpg",
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
        entryUrl: "https://login.createsend.com/l?_ga=2.41260645.657612371.1523338420-1375527042.1523338420",
    }

    constructor() {
        super(CampaignMonitorCollector.CONFIG);
    }
}
