<template>
  <div class="h-screen w-full flex flex-row">
    <div class="w-2/5 p-24">
      <div class="flex flex-col items-center h-full w-full flex-col">
        <img
          src="~/assets/study.png"
          alt=""
          class="rounded-full w-20 border shadow-ml my-8"
        />
        <h1 class="font-bold text-2xl mb-4">Sign In</h1>
        <form>
          <div class="flex flex-col my-4 py-2">
            <label for="email" class="font-bold">Your Email</label>
            <input
              type="text"
              placeholder="Please enter your email"
              class="w-full border rounded py-2 px-3"
            />
          </div>
          <div class="flex flex-col my-4">
            <label for="password" class="font-bold">Your Password</label>
            <input
              type="password"
              placeholder="Please enter your password"
              class="w-full border py-2 px-3"
            />
          </div>
          <div class="mt-8 text-center">
            <button
              class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>
            <div class="flex my-8 border rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt=""
                class="ml-2"
              />
              <p class="ml-2 font-bold text-white h-full bg-blue-500 p-2">Sign In With Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="w-4/5">
      <img
        src="https://wallpapercave.com/wp/wp5315494.jpg"
        alt=""
        class="h-full w-full"
      />
    </div>
  </div>
</template>
