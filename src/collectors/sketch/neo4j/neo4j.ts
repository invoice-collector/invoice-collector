
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Neo4jCollector extends SketchCollector {

    static CONFIG = {
        id: "neo4j",
        name: "Neo4J",
        description: "i18n.collectors.neo4j.description",
        version: "0",
        website: "https://console.neo4j.io/?tab=invoices#settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515364.jpg",
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
        entryUrl: "https://console.neo4j.io/?tab=invoices#settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Neo4jCollector.CONFIG);
    }
}
