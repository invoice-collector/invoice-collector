
import { SketchCollector } from '../../sketchCollector';

export class GossipTrendsCollector extends SketchCollector {

    static CONFIG = {
        id: "gossip_trends",
        name: "Gossip Trends",
        description: "i18n.collectors.gossip_trends.description",
        version: "0",
        website: "https://gossiptrends.goaffpro.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748729.jpg",
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
        entryUrl: "https://gossiptrends.goaffpro.com/",
    }

    constructor() {
        super(GossipTrendsCollector.CONFIG);
    }
}
