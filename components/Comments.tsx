"use client"
import { client } from "@/sanity/lib/client";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  post: Post;
}

type Input = {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

function Comments({ post }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    client
      .create({
        _type: "comment",
        post: {
          _type: "reference",
          _ref: data._id,
        },
        name: data.name,
        email: data.email,
        comment: data.comment,
      })
      .then(() => {
        console.log("Submitted: ", data);
      })
      .catch((err) => {
        console.log("Not submitted: ", err);
      });
  }

  console.log(post)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10">
      <h1 className="text-3xl font-bold">Comment on blog</h1>
      <input
        {...register("name", { required: true })}
        className="shadow border border-gray-400 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
        placeholder="Your name"
        type="text"
      />
      <input
        {...register("email", { required: true })}
        className="shadow border border-gray-400 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
        placeholder="Your email"
        type="email"
      />
      <textarea
        {...register("comment", { required: true })}
        className="shadow border border-gray-400 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
        placeholder="Your comment"
        rows={8}
      />

      <input
        {...register("_id")}
        type="hidden"
        name="_id"
        value={post._id}
      />

      <div className="flex flex-col p-5">
        {errors.name && (
          <span className="text-red-500">The name field is required!</span>
        )}
        {errors.email && (
          <span className="text-red-500">The email field is required!</span>
        )}
        {errors.comment && (
          <span className="text-red-500">
            The comment field is required!
          </span>
        )}
      </div>

      <input
        type="submit"
        className="bg-slate-500 text-white font-bold mt-3 py-2 px-4 rounded cursor-pointer"
      />

      {/* Displaying Comments */}
      <div>
        <h1 className="text-4xl">Comments</h1>
        {post.comments.length < 1 ? (
          <div>
            <p>Be the first to comment </p>
          </div>
        ) : (
          <div>
            {post.comments.map((comment: any) => (
              <div key={comment._id}>
                <p className="">
                  <span className="text-slate-800 text-base font-bold">
                    {comment.name}:
                  </span>{" "}
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  )
}

export default Comments