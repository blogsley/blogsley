import graphene

from rx import Observable

import blogsley.schema.users
import blogsley.schema.blog
import blogsley.schema.images

class Mutation(users.Mutation, blog.Mutation, images.Mutation):
    pass

class Query(users.Query, blog.Query, images.Query):
    pass

#class Subscription(users.Subscription, blog.Subscription, images.Subscription):
class Subscription(blog.Subscription):
    pass

#schema = graphene.Schema(query=Query, mutation=Mutation)
schema = graphene.Schema(query=Query, mutation=Mutation, subscription=Subscription)
