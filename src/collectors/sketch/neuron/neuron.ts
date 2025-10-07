
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NeuronCollector extends SketchCollector {

    static CONFIG = {
        id: "neuron",
        name: "Neuron",
        description: "i18n.collectors.neuron.description",
        version: "0",
        website: "https://app.neuronwriter.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131255.jpg",
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
        entryUrl: "https://app.neuronwriter.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NeuronCollector.CONFIG);
    }
}
