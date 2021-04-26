import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DogInterface } from 'src/interface/dog.interface';

@Injectable()
export class DogsService {
    constructor(
        @InjectModel('dogs')
        private readonly dogsModel: Model<DogInterface>
        ) {

    }

    async getDogsList(queryParams) {
        const aggregatePipelines = [];
        aggregatePipelines.push(
            {
            $match:{}
            },
            {
                 $project: {
                 breed_name: 1,
                 breed_image: 1,
                 description: 1
                }
            }
        )
        if (queryParams.offset !== undefined && queryParams.limit !== undefined) {
            const pageNo = parseInt(queryParams['offset'], 10);
            const size = parseInt(queryParams['limit'], 10);
            if (pageNo < 0 || pageNo === 0) {
                return 'invalid page number, should start with 1';
            }
            const skip = size * (pageNo - 1);
            const limit = size;
            console.log('SKIP ' , skip);
            console.log('LIMIT ' , limit);
            aggregatePipelines.push({ $skip: skip });
            aggregatePipelines.push({ $limit: limit });
        }
        return await this.dogsModel.aggregate(aggregatePipelines).exec()
    }

    async createDog(body) {
        const model =new this.dogsModel(body);
        return await model.save();
    }
}
